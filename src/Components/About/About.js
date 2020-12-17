import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import {Octokit} from '@octokit/rest';
import styles from './About.module.css';

const octokit = new Octokit();

class About extends React.Component {
  state = {
    user: [],
    isLoading: true,
    repoList: [],
    loadFailure: false
  }

  componentDidMount() {
    octokit.repos.listForUser({
      username: 'Malkusha'
    }).then(({data}) => {
          this.setState({
            repoList: data,
            isLoading: false
          })
        })
      .catch( () => {
        this.setState({
          loadFailure: true
        })
      });

      octokit.users.getByUsername({
        username: 'Malkusha'
      }).then(({data}) => {
        this.setState({
          user: data,
          isLoading: false
        })
      })
      .catch( () => {
        this.setState({
          loadFailure: true
        })
      })
  }

  render() {
    const { isLoading, repoList, loadFailure, user } = this.state;

    return (
      <div>
        <h1 className = {styles.title}>
          &#9731; { isLoading ? <LinearProgress color="secondary"/> : 'About me'}
        </h1>
        {!isLoading && <div>
            <h2 className = {styles.subtitle}>Hello, I'm Nastya 	&laquo;{user.login}&raquo; </h2>
            <p className = {styles.text} >Follow <a href={user.html_url} className={styles.link}>my page on GitHub</a></p>
          </div>
        }
        {!isLoading &&<ul> My repos:
            {repoList.map(repo => (<li key={repo.id}><a href={repo.html_url}>
              {repo.name}</a>
            </li>))}
          </ul>}
        {loadFailure && <h2>Something's wrong. Have a rest</h2>}
      </div>
    );
  }
}

export default About;
