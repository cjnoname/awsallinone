import * as React from 'react';
import { List } from 'immutable';
import { ClientImpersonationClient } from '../models';
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
  clientImpersonationClient?: List<ClientImpersonationClient>
}

const ClientImpersonationDetails = (props: PropsType) => {
  const clientImpersonationClient = props.clientImpersonationClient;
  return (
    clientImpersonationClient
      ?
      <Table>
        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
          <TableRow>
            <TableHeaderColumn>Impersonate ClientId</TableHeaderColumn>
            <TableHeaderColumn>Scope</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
          {clientImpersonationClient.map(val => {
            const { impersonateClientId, scope } = val;
            return (
              <TableRow key={`clientImpersonationClient${clientImpersonationClient.indexOf(val)}`}>
                <TableRowColumn>{impersonateClientId}</TableRowColumn>
                <TableRowColumn>{scope}</TableRowColumn>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      : null
  );
}

export default ClientImpersonationDetails;