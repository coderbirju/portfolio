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
                            <p> { repoData.description } </p>
                            <p> Clone: {repoData.clone_url} </p>
                            <p> Language: { repoData.language ? repoData.language : 'JavaScript' }</p>
                            
                        </h5>
                    </div>
                )
      }

}


export default RepoItem;