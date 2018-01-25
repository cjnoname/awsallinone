import * as React from 'react';
import { List } from 'immutable';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from '../../../shared/UI/Table';
import { Client, ClientResourceAccess } from '../models';
import ClientResourceAccessDetails from './clientResourceAccessDetails';
import * as styles from './styles.scss';

interface PropsType {
  client: Client;
}

const ClientDetails = (props: PropsType) => {
  const { client } = props;
  return (
    <Table>
      <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
        <TableRow>
          <TableHeaderColumn>Client ID</TableHeaderColumn>
          <TableHeaderColumn>Secret</TableHeaderColumn>
          <TableHeaderColumn>Salt</TableHeaderColumn>
          <TableHeaderColumn>Name</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>
        <TableRow>
          <TableRowColumn>{client.clientId}</TableRowColumn>
          <TableRowColumn>{client.secret}</TableRowColumn>
          <TableRowColumn>{client.salt}</TableRowColumn>
          <TableRowColumn>{client.name}</TableRowColumn>
        </TableRow>
      </TableBody>
    </Table>
  );
}

export default ClientDetails;