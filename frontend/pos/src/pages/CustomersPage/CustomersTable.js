import React, { useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory, {
  PaginationProvider,
  PaginationListStandalone,
} from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import "./CustomersPage.css";

const { SearchBar } = Search;

const columns = [
  {
    dataField: "number",
    text: "#",
    sort: true,
  },
  {
    dataField: "name",
    text: "Name",
    sort: true,
  },
  {
    dataField: "last",
    text: "Last Transaction",
    sort: true,
  },
  {
    dataField: "debt",
    text: "Debt",
    sort: true,
  },
  {
    dataField: "action",
    text: "Actions",
  },
];

const products = [];

for (let i = 0; i < 1000; i++) {
  products.push({
    number: i,
    name: `Bill_${i}`,
    last: Date.now(),
    debt: `${i}000`,
  });
}

const defaultSorted = [
  {
    dataField: "id",
    order: "desc",
  },
];

export default class CustomersTable extends React.Component {
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
          search
        >
          {(toolkitprops) => (
            <div className="Table__container">
              <div className="search__area">
                <h2>Name</h2>
                <SearchBar {...toolkitprops.searchProps} />
              </div>

              <BootstrapTable
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
      <div>
        <PaginationProvider pagination={paginationFactory(options)}>
          {contentTable}
        </PaginationProvider>
      </div>
    );
  }
}
