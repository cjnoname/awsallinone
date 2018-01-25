import * as React from 'react';
import { List } from 'immutable';
import { ClientAccessParameter } from '../models';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from '../../../shared/UI/Table';
import * as styles from './styles.scss';

interface PropsType {
  clientAccessParameter?: List<ClientAccessParameter>
}

const ClientAccessParameterDetails = (props: PropsType) => {
  const { clientAccessParameter } = props;
  return (
    !clientAccessParameter ?
      <div>
      </div>
      :
      <Table>
        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
          <TableRow>
            <TableHeaderColumn>Resource ID</TableHeaderColumn>
            <TableHeaderColumn>Key</TableHeaderColumn>
            <TableHeaderColumn>Value</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
          {clientAccessParameter.map(val => {
            const { resourceId, key, value } = val;
            return (
              <TableRow key={`clientAccessParameter${clientAccessParameter.indexOf(val)}`}>
                <TableRowColumn>{resourceId}</TableRowColumn>
                <TableRowColumn>{key}</TableRowColumn>
                <TableRowColumn>{value}</TableRowColumn>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
  );
}

export default ClientAccessParameterDetails;