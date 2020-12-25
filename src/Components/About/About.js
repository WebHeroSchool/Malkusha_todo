import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import {Octokit} from '@octokit/rest';
import Card from '@material-ui/core/Card';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import instagram from './pics/instagram.png';
import vk from './pics/vk.png';
import whatsapp from './pics/whatsapp.png';
import telegram from './pics/telegram.png';
import mail from './pics/mail.png';
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
        <div className = {styles.about}>
          <Avatar variant="square" alt="Anastasiya" src={user.avatar_url} />
          <h3 className = {styles.name}>{user.name}</h3>
        </div>
        <p className={styles.bio}>&#9731; {user.bio}</p>
        <h1>
          { isLoading ? <LinearProgress color="secondary"/> : ' '}
        </h1>
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>My portfolio</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <a href="https://webheroschool.github.io/AXION_Malkusha/"><p>Online shop page</p></a>
            <a href="https://webheroschool.github.io/Malkusha_JS_exam/"><p>Card game</p></a>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>My repos</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
        {!isLoading &&<ul>
              {repoList.map(repo => (<li key={repo.id}>
                <a href={repo.html_url}>{repo.name}.</a>
                <p className = {styles.repo}>Description: {repo.description}</p>
                <p className = {styles.repo}>language: {repo.language}</p>
                <Divider />
              </li>))}
            </ul>}
        </Typography>
      </AccordionDetails>
    </Accordion>
    <p className={styles.follow}>Follow <a href={user.html_url}>my page on GitHub</a></p>

        {loadFailure && <h2>Something's wrong. Have a rest</h2>}

        <Card className = {styles.card}>
            <a href="https://www.instagram.com/pas_malkusha/">
              <img className={styles.icon} src={instagram}></img>
            </a>
            <a href="https://vk.com/id456129067">
              <img className={styles.icon} src={vk}></img>
            </a>
            <a href="https://wa.me/79168454226">
              <img className={styles.icon} src={whatsapp}></img>
            </a>
            <a href="https://t.me/pas_malkusha">
              <img className={styles.icon} src={telegram}></img>
            </a>
            <a href="mailto:malkusha@mail.ru">
              <img className={styles.icon} src={mail}></img>
            </a>
        </Card>
      </div>
    );
  }
}

export default About;
