import React from "react";

import "react-base-table/styles.css";
import Table, { Column } from "react-base-table";

export const Table1 = () => {
  const data = [
    {
      index: 0,
      name: "LeBron",
      team: "Lakers",
      children: [
        {
          index: "LeBron-detail",
          text: "This is a sample text 1"
        },
        {
          id: "LeBron1-detail",
          text: "This is a sample text 2"
        }
      ]
    },
    {
      index: 1,
      name: "Kawhi",
      team: "Clippers",
      children: [
        {
          id: "Kawhi-detail",
          text: "This is a sample text 1"
        }
      ]
    },
    {
      index: 2,
      name: "Durant",
      team: "Nets",
      children: [
        {
          id: "Durant-detail",
          text: "This is a sample text 1"
        }
      ]
    }
  ];

  const rowRenderer = ({ rowData, cells }) => {
    debugger;
    if (rowData.text) return <div>{rowData.text}</div>;
    return cells;
  };

  return (
    <div>
      <Table
        key={"index"}
        data={data}
        width={500}
        height={1000}
        expandColumnKey={"name"}
        estimatedRowHeight={40}
        rowRenderer={rowRenderer}
      >
        <Column key="name" dataKey="name" title="Name" width={100} sortable />
        <Column key="team" dataKey="team" title="Team" width={100} sortable />
        {/* <Column key="children" dataKey="children" title="ROE 1 yr Fwd" width={100} sortable /> */}
      </Table>
    </div>
  );
};
