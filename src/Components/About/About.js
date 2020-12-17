import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import {Octokit} from '@octokit/rest';
import styles from './About.module.css';

const octokit = new Octokit();

class About extends React.Component {
  state = {
    isLoading: true,
    repoList: [],
    loadFailure: false
  }

  componentDidMount() {
    octokit.repos.listForUser({
      usernsme: 'Malkusha'})
        .then(({data}) =>{
          this.setState({
            repoList: data,
            isLoading: false
          })
          .catch(function (error) {
          console.log('Request failed', error)
        });
    });
  }

  render() {
    const { isLoading, repoList, loadFailure } = this.state;

    return (
      <div>
        <h1 className = {styles.title}>
          &#9731; { isLoading ? <LinearProgress color="secondary"/> : 'About'}
        </h1>
        {!isLoading && <ol>
            {repoList.map(repo => (<li key={repo.id}>
              {repo.name}
            </li>))}
          </ol>}
          {loadFailure && <h2>Something's wrong. Take a rest</h2>}
      </div>
    );
  }
}

export default About;
