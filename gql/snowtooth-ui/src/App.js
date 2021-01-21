import React from 'react';
import gql from 'graphql-tag';
import { StatusIndicator } from './StatusIndicator';
import { useQuery, useMutation, useSubscription } from '@apollo/react-hooks';

const QUERY = gql`
  query {
    allLifts {
      id
      name
      status
      capacity
      trailAccess {
        id
        name
      }
    }
  }
  query {
    allTrails {
      id
      name
      status
    }
  }
`;

const MUTATION = gql`
  mutation SetLiftStatus($id: ID!, $status: LiftStatus!) {
    setLiftStatus(id: $id, status: $status) {
      id
      name
      status
    }
  }
`;

const TRAIL_MUTATION = gql`
  mutation setTrailStatus($id: ID!, $status: TrailStatus) {
    setTrailStatus(id: $id, status: $status) {
      id
      name
    }
  }
`;

const SUBSCRIPTION = gql`
  subscription {
    liftStatusChange {
      id
      status
    }
  }
`;
const TRAIL_SUBSCRIPTION = gql`
  subscription {
    trailStatusChange {
      id
      status
    }
  }
`;

export default function App() {
  const { loading, data } = useQuery(QUERY);
  const { loadingTrail, dataTrail } = useQuery(TRAIL_QUERY);
  const [setStatus] = useMutation(MUTATION);
  const [setStatusTrail] = useMutation(TRAIL_MUTATION);
  useSubscription(SUBSCRIPTION);
  useSubscription(TRAIL_SUBSCRIPTION);

  if (loading) return <p>loading lifts</p>;

  return (
    <section>
      <h1>Snowtooth Lift Status</h1>

      {data && !loading && (
        <table className="lifts">
          <thead>
            <tr>
              <th>Lift Name</th>
              <th>Current Status</th>
            </tr>
          </thead>
          <tbody>
            {data.allLifts.map(lift => (
              <tr key={lift.id}>
                <td>{lift.name}</td>
                <td>
                  <StatusIndicator
                    status={lift.status}
                    onChange={status =>
                      setStatus({
                        variables: {
                          id: lift.id,
                          status
                        }
                      })
                    }
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
}
