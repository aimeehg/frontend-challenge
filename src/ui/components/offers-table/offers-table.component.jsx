import { useMemo } from "react";
import { useTable, useSortBy } from "react-table";
import { COLUMNS } from "./columns";
import "./offers-table.styles.scss";

export default function OffersTable({ offers, ...props }) {
    // gets data and columns
    const data = useMemo(() => offers.data, [offers.data]);
    const columns = useMemo(() => COLUMNS, []);

    // react-table config
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable(
        {
            columns,
            data,
        },
        useSortBy,
    );

    return (
        <div className="table-container">
            <table {...getTableProps()} class="styled-table">
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th
                                    {...column.getHeaderProps(
                                        column.getSortByToggleProps(),
                                    )}>
                                    {column.render("Header")}
                                    <span>
                                        {column.isSorted
                                            ? column.isSortedDesc
                                                ? " ∇"
                                                : " ∆"
                                            : ""}
                                    </span>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row, i) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return (
                                        <td {...cell.getCellProps()}>
                                            {cell.render("Cell")}
                                        </td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
