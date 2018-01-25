import * as React from 'react';
import { List } from 'immutable';
import { ClientResourceAccess } from '../models';
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
  clientResourceAccess?: List<ClientResourceAccess>
}

const ClientResourceAccessDetails = (props: PropsType) => {
  const clientResourceAccesses = props.clientResourceAccess;
  return (
    clientResourceAccesses
      ?
      <Table>
        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
          <TableRow>
            <TableHeaderColumn>Resource ID</TableHeaderColumn>
            <TableHeaderColumn>Access</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
          {clientResourceAccesses.map(val => {
            const { access, resourceId } = val;
            return (
              <TableRow key={`clientResourceAccesses${clientResourceAccesses.indexOf(val)}`}>
                <TableRowColumn>{resourceId}</TableRowColumn>
                <TableRowColumn>{access}</TableRowColumn>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      : null
  );
}

export default ClientResourceAccessDetails;