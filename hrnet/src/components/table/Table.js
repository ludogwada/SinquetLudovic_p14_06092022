import { useTable, usePagination } from 'react-table';
import React from 'react';

export function Table() {
	const data = React.useMemo(
		() => [
			{
				col1: 'Hello',
				col2: 'World',
			},
			{
				col1: 'react-table',
				col2: 'rocks',
			},
			{
				col1: 'whatever',
				col2: 'you want',
			},
		],
		[]
	);

	const columns = React.useMemo(
		() => [
			{
				Header: 'Column 1',
				accessor: 'col1', // accessor is the "key" in the data
			},
			{
				Header: 'Column 2',
				accessor: 'col2',
			},
		],
		[]
	);

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
		pageOptions,
		page,
		state: { pageIndex, pageSize },
		gotoPage,
		previousPage,
		nextPage,
		setPageSize,
		canPreviousPage,
		canNextPage,
	} = useTable({ columns, data }, usePagination);

	return (
		<div>
			<table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
				<thead>
					{headerGroups.map((headerGroup) => (
						<tr {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map((column) => (
								<th
									{...column.getHeaderProps()}
									style={{
										borderBottom: 'solid 3px red',
										background: 'aliceblue',
										color: 'black',
										fontWeight: 'bold',
									}}>
									{column.render('Header')}
								</th>
							))}
						</tr>
					))}
				</thead>
				<tbody {...getTableBodyProps()}>
					{rows.map((row) => {
						prepareRow(row);
						return (
							<tr {...row.getRowProps()}>
								{row.cells.map((cell) => {
									return (
										<td
											{...cell.getCellProps()}
											style={{
												padding: '10px',
												border: 'solid 1px gray',
												background: 'papayawhip',
											}}>
											{cell.render('Cell')}
										</td>
									);
								})}
							</tr>
						);
					})}
				</tbody>
			</table>
			<div>
				<button onClick={() => previousPage()} disabled={!canPreviousPage}>
					Previous Page
				</button>
				<button onClick={() => nextPage()} disabled={!canNextPage}>
					Next Page
				</button>
				<div>
					Page{' '}
					<em>
						{pageIndex + 1} of {pageOptions.length}
					</em>
				</div>
				<div>Go to page:</div>
				<input
					type='number'
					defaultValue={pageIndex + 1 || 1}
					onChange={(e) => {
						const page = e.target.value ? Number(e.target.value) - 1 : 0;
						gotoPage(page);
					}}
				/>
				<select
					value={pageSize}
					onChange={(e) => {
						setPageSize(Number(e.target.value));
					}}>
					{[10, 20, 30, 40, 50].map((pageSize) => (
						<option key={pageSize} value={pageSize}>
							Show {pageSize}
						</option>
					))}
				</select>
			</div>
		</div>
	);
}
