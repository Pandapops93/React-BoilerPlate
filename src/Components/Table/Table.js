import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { TableFooter, TablePagination } from "@material-ui/core";

class MyTable extends Component {
  state = {
    tableData: [],
    currentPage: 0,
    rowsPerPage: 5,
    totalCount: 0
  };

  componentDidMount() {
    console.log("Table", "Mounted");

    var data = [
      {
        name: "Andrew",
        age: 26,
        role: "Developer"
      },
      {
        name: "Gytis",
        age: 30,
        role: "Security/Support"
      },
      {
        name: "Laing",
        age: 50,
        role: "Developer/SysAdmin"
      },
      {
        name: "Andrew",
        age: 26,
        role: "Devevloper"
      },
      {
        name: "Gytis",
        age: 30,
        role: "Secuvrity/Support"
      },
      {
        name: "Laing",
        age: 50,
        role: "Devsdgeloper/SysAdmin"
      },
      {
        name: "Andrew",
        age: 26,
        role: "Devdseloper"
      },
      {
        name: "Gytis",
        age: 30,
        role: "Secdsfgurity/Support"
      },
      {
        name: "Laing",
        age: 50,
        role: "Devdsfgseloper/SysAdmin"
        },
        {
            name: "Laing",
            age: 50,
            role: "Devdsfgseloper/SasdysAdmin"
          }
    ];

    this.setState({ tableData: data, totalCount: data.length });
  }

  onPageChange = (event, newPage) => {
    console.log("Page Changed", newPage);
    this.setState({ currentPage: newPage });
    };
    
    onNumberOfPagesChanged = (event,newRowsPerPage ) => {
        
        console.log("rows changed", newRowsPerPage);
        this.setState({rowsPerPage : newRowsPerPage.props.value})
    }

    render() {
        console.log("re Render", this.state);
    return (
      <Table className="root">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Role</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.tableData
            .slice(this.state.currentPage * this.state.rowsPerPage, this.state.currentPage * this.state.rowsPerPage + this.state.rowsPerPage)
            .map((row, index) => {
              return (
                <TableRow key={row.name + row.age+ row.role}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>

                  <TableCell>{row.age}</TableCell>
                  <TableCell>{row.role}</TableCell>
                </TableRow>
              );
            })}
        </TableBody>
        <TablePagination className="toolbar" count={this.state.totalCount} rowsPerPage={this.state.rowsPerPage} page={this.state.currentPage} onChangePage={this.onPageChange} onChangeRowsPerPage={this.onNumberOfPagesChanged} rowsPerPageOptions={[5,10,15,20]}/>
      </Table>
    );
  }
}

export default MyTable;
