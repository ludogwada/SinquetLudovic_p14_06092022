import {
	useTable,
	usePagination,
	useSortBy,
	useGlobalFilter,
} from 'react-table';
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
				Header: 'First Name',
				accessor: 'col1', // accessor is the "key" in the data
				sortType: 'basic',
			},
			{
				Header: 'Last Name',
				accessor: 'col2',
				sortType: 'basic',
			},
			{
				Header: 'Start Date',
				accessor: 'col3',
				sortType: 'basic',
			},
			{
				Header: 'Departement',
				accessor: 'col4',
				sortType: 'basic',
			},
			{
				Header: 'Date of Birth',
				accessor: 'col5',
				sortType: 'basic',
			},
			{
				Header: 'Street',
				accessor: 'col6',
				sortType: 'basic',
			},
			{
				Header: 'City',
				accessor: 'col7',
				sortType: 'basic',
			},
			{
				Header: 'State',
				accessor: 'col8',
				sortType: 'basic',
			},
			{
				Header: 'Zip Code',
				accessor: 'col9',
				sortType: 'basic',
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
		setGlobalFilter,
		state: { pageIndex, pageSize, globalFilter },
		gotoPage,
		previousPage,
		nextPage,
		setPageSize,
		canPreviousPage,
		canNextPage,
	} = useTable({ columns, data }, useGlobalFilter, useSortBy, usePagination);

	React.useEffect(() => {
		console.log(globalFilter);
	}, [globalFilter]);

	return (
		<article className='table'>
			<header className='table__header'>
				<section>
					Show
					<select
						className='table__header__selectList'
						value={pageSize}
						onChange={(e) => {
							setPageSize(Number(e.target.value));
						}}>
						{[10, 20, 30, 40, 50].map((pageSize) => (
							<option key={pageSize} value={pageSize}>
								{pageSize}
							</option>
						))}
					</select>
					entries
				</section>
				<section>
					Search :
					<input
						className='table__header__search'
						type='text'
						value={globalFilter || ''}
						onChange={(e) => setGlobalFilter(e.target.value)}
					/>
				</section>
			</header>
			<table {...getTableProps()} style={{ border: 'solid 1px grey' }}>
				<thead>
					{headerGroups.map((headerGroup) => (
						<tr {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map((column) => (
								<th
									{...column.getHeaderProps(column.getSortByToggleProps())}
									style={{
										background: 'aliceblue',
										color: 'black',
										fontWeight: 'bold',
									}}>
									{column.render('Header')}
									<span>{column.isSortedDesc ? ' ⬆️' : ' ⬇️'}</span>
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
												background: '#e3f0ff',
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
			</div>
		</article>
	);
}
