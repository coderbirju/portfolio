import React from 'react'

class RepoItem extends React.Component {
    
    componentDidMount(){
        const { repoData } = this.props;
        console.log('repos: ', repoData);
    }
    render (){
        const { repoData } = this.props;
        return (
                    <div className='card text-left'>
                        <h5>
                            <a href={repoData.html_url}> {repoData.name} </a>
                        </h5>
                    </div>
                )
      }

}


export default RepoItem;