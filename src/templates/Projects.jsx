import React from 'react';
import '../global-css.css';
import { Layout } from 'antd';
// import { columns } from "../Db/projects_data.js";
import { getUser, getUserRepos } from "../utils/github";
import RepoItem from "./repoItem";
const { Content } = Layout;


class Project extends React.Component {
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = { 
            userData: null,
            repoData: null 
        };
    }

    componentDidMount() {
        getUser()
        .then(res => {
            this.setState({
                userData: res.data
            });
        })
        .catch({});

        getUserRepos()
        .then(res => {
            // console.log('res: ', res.data);
            this.setState({
                repoData: res.data
            });
            // res.data[0]
            console.log('res.data[0]: ', res.data);
        })
        .catch({});
    }
    render (){
      const { repoData} = this.state;
      let renderData = <p>Loading..</p>;
      if(repoData === null)
        {
          return renderData;
        }
        else
        {
          return (
            <Layout>
              <div className='align-Content'>
                <img className='profile-img' src='https://avatars2.githubusercontent.com/u/47769978?v=4' alt='avatar' />
              </div>
              { repoData.map(data => 
                <div>
                  <Content> 
                    <RepoItem key={data.id} repoData={data} />
                  </Content>
                </div>
              )}
            </Layout>
          );
        }
      } 
}


export default Project;