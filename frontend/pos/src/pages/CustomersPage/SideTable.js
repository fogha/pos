import React, { useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import "./CustomersPage.css";

import paginationFactory, {
  PaginationProvider,
  PaginationListStandalone,
} from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";

const columns = [
  {
    dataField: "id",
    text: "Product ID",
    sort: true,
  },
  {
    dataField: "name",
    text: "Product Name",
    sort: true,
  },
  {
    dataField: "price",
    text: "Product Price",
    sort: true,
  },
];

const products = [];

for (let i = 0; i < 1000; i++) {
  products.push({
    id: i,
    name: `bill${i}`,
    price: i,
  });
}

const defaultSorted = [
  {
    dataField: "id",
    order: "desc",
  },
];

export default class SideTable extends React.Component {
  state = { products };

  loadData = () => {
    this.setState({ products });
  };

  render() {
    const options = {
      custom: true,
      paginationSize: 4,
      pageStartIndex: 1,
      firstPageText: "First",
      prePageText: "Back",
      nextPageText: "Next",
      lastPageText: "Last",
      nextPageTitle: "First page",
      prePageTitle: "Pre page",
      firstPageTitle: "Next page",
      lastPageTitle: "Last page",
      showTotal: true,
      totalSize: this.state.products.length,
    };
    const contentTable = ({ paginationProps, paginationTableProps }) => (
      <div>
        <ToolkitProvider
          keyField="id"
          columns={columns}
          data={this.state.products}
        >
          {(toolkitprops) => (
            <div>
              <BootstrapTable
                classes="sideTable"
                striped
                hover
                {...toolkitprops.baseProps}
                {...paginationTableProps}
              />
            </div>
          )}
        </ToolkitProvider>
        <PaginationListStandalone {...paginationProps} />
      </div>
    );

    return (
      <div className=" sideTable__container">
        <h2>Transaction for Acha Bill</h2>
        <PaginationProvider pagination={paginationFactory(options)}>
          {contentTable}
        </PaginationProvider>
      </div>
    );
  }
}
