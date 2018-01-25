import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { SubmissionError } from 'redux-form/immutable';
import { ApplicationState } from '../../store';
import { Tabs, Tab } from '../../shared/UI/Tabs';
import ViewDetailsSearchBar from './views/viewDetailsSearchBar';
import ClientDetails from './views/clientDetails';
import ClientResourceAccessDetails from './views/clientResourceAccessDetails';
import ClientAccessParameterDetails from './views/clientAccessParameterDetails';
import ClientImpersonationDetails from './views/clientImpersonationDetails';
import { ViewDetailsState, SearchDetailsRequest } from './models';
import { actionCreators } from './actions';
import Spinner from '../../shared/UI/Spinner';
import * as styles from './styles.scss';

type PropsType =
    ApplicationState
    & typeof actionCreators
    & RouteComponentProps<{}>;

class ViewDetails extends React.Component<PropsType, {}> {
    submit = (values: SearchDetailsRequest) => {
        if (!(values.get("clientId", undefined) || values.get("token", undefined))) {
            throw new SubmissionError({ _error: 'You should type in at least one search condition' })
        }
        this.props.getOAuthAction(values);
    }

    public render() {
        const { client, isLoading } = this.props.viewDetails;
        return <div>
            <Spinner loading={isLoading} />
            <h3>View Details</h3>
            <ViewDetailsSearchBar onSubmit={this.submit} />
            {client &&
                <Tabs className={styles.marginTop60}>
                    <Tab label="Client" >
                        <div>
                            <ClientDetails client={client} />
                        </div>
                    </Tab>
                    <Tab label="Resource Access" >
                        <div>
                            <ClientResourceAccessDetails clientResourceAccess={client.clientResourceAccess} />
                        </div>
                    </Tab>
                    <Tab label="Access Parameter" >
                        <div>
                            <ClientAccessParameterDetails clientAccessParameter={client.clientAccessParameter} />
                        </div>
                    </Tab>
                    <Tab label="Client Impersonation" >
                        <div>
                            <ClientImpersonationDetails clientImpersonationClient={client.clientImpersonationClient} />
                        </div>
                    </Tab>
                </Tabs>
            }
        </div>;
    }
}

export default connect(
    (state: ApplicationState) => state,
    actionCreators
)(ViewDetails as any) as any;
