// import * as React from 'react';
// import { Field, reduxForm } from 'redux-form';
// import { AccessToken } from '../models';

// interface PropsType {
//    accessToken?: AccessToken,
// }

// const OAuthDetails = (props: PropsType) => {
//     const client = props.client;
//     return (
//       !client ?
//       <div>
//         Not Found
//       </div>
//       :
//       <div>
//         <h3>Client</h3>
//         <div>
//           <span>ClientId: </span>{client!.clientId}
//         </div>
//         <div>
//           <span>Secret: </span>{client!.secret}
//         </div>
//         <div>
//           <span>Salt: </span>{client!.salt}
//         </div>
//         <div>
//           <span>Name: </span>{client!.name}
//         </div>
//       </div>
//     );
// }

// export default OAuthDetails;