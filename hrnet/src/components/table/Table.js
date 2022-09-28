import {
	useTable,
	usePagination,
	useSortBy,
	useGlobalFilter,
} from 'react-table';
import React from 'react';
export function Table(props) {
	const data = React.useMemo(() => props.datas, [props.datas]);
	const columns = React.useMemo(
		() => [
			{
				Header: 'First Name',
				accessor: 'firstName',
				sortType: 'basic',
			},
			{
				Header: 'Last Name',
				accessor: 'lastName',
				sortType: 'basic',
			},
			{
				Header: 'Start Date',
				accessor: 'dateStart',
				sortType: 'basic',
			},
			{
				Header: 'Departement',
				accessor: 'departement',
				sortType: 'basic',
			},
			{
				Header: 'Date of Birth',
				accessor: 'dateBirth',
				sortType: 'basic',
			},
			{
				Header: 'Street',
				accessor: 'street',
				sortType: 'basic',
			},
			{
				Header: 'City',
				accessor: 'city',
				sortType: 'basic',
			},
			{
				Header: 'State',
				accessor: 'state',
				sortType: 'basic',
			},
			{
				Header: 'Zip Code',
				accessor: 'zipCode',
				sortType: 'basic',
			},
		],
		[]
	);

	const pagination = () => {
		return (
			<span>
				Showing {pageIndex === 0 ? 1 : pageIndex * pageSize + 1} to{' '}
				{(pageIndex + 1) * pageSize > data.length
					? data.length
					: (pageIndex + 1) * pageSize}{' '}
				of {data.length} entries
			</span>
		);
	};
	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		prepareRow,
		page,
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

	React.useEffect(() => {}, [globalFilter]);

	return (
		<article className='table'>
			<header className='table__header'>
				<section className='table__header__entries'>
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
					<label htmlFor='searchBar'>
						<input
							placeholder='Search ...'
							id='searchBar'
							className='table__header__search'
							type='text'
							value={globalFilter || ''}
							onChange={(e) => setGlobalFilter(e.target.value)}
						/>
					</label>
				</section>
			</header>
			<table
				className='table__table'
				{...getTableProps()}
				style={{ border: 'solid 1px grey' }}>
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
					{page.map((row) => {
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
			<section className='table__pagination'>
				<div className='table__pagination__show'>
					<div>{pagination()}</div>
					<div>
						<button
							className='table__pagination__button'
							onClick={() => previousPage()}
							disabled={!canPreviousPage}>
							Previous Page
						</button>
						<button
							className='table__pagination__button'
							onClick={() => nextPage()}
							disabled={!canNextPage}>
							Next Page
						</button>
					</div>
				</div>
				<div className='table__pagination__page'>
					Page{' '}
					<em>
						{pageIndex + 1} of {pageOptions.length}
					</em>
				</div>

				<section className='table__pageNumber'>
					<label htmlFor='pageNumber'>
						Go to page:
						<input
							className='table__pageNumber__number'
							id='pageNumber'
							type='number'
							defaultValue={pageIndex + 1 || 1}
							onChange={(e) => {
								const page = e.target.value ? Number(e.target.value) - 1 : 0;
								gotoPage(page);
							}}
						/>
					</label>
				</section>
			</section>
		</article>
	);
}
