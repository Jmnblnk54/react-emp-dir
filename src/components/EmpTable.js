import React, { useContext } from 'react';
import DataBody from './DataBody';
import EmpAreaContext from '../utils/EmpAreaContext';

const EmpTable = () => {
	const context = useContext(EmpAreaContext);

	return (
		<div className="datatable mt-5">
			<table id="table" className="table table-striped table-hover table-condensed">
				<thead>
					<tr>
						{context.developerState.headings.map(({ name, width }) => {
							return (
								<th
									className="col"
									key={name}
									style={{ width }}
									onClick={() => {
										context.handleSort(name);
									}}
								>
									{name}
									<span className="pointer"></span>
								</th>
							);
						})}
					</tr>
				</thead>
				<DataBody />
			</table>
		</div>
	);
};

export default EmpTable;