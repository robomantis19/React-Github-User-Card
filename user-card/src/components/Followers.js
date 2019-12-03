import React from 'react'; 




    
const Followers = (props) => {



        
    
        return (
            <div>
                {props.Fuser.length > 0 ? props.Fuser.map(output => { 
                    return (
                    <div key={output.id} style={{marginLeft: `100px`, width: `800px`, border: `2px dashed black`, display: `flex`}}>
                        <img style={{marginRight: `60px`, width: `30%`}} src={output.avatar_url}/>
                        <div style={{display: `flex`, flexDirection: `column`, justifyContent: `space-around`}}>
                            <div> {output.name}</div>
                            <div> Bio: {output.bio}</div>
                            <div> Followers: {output.followers}</div>
                            <div> Following: {output.following}</div>
                            <div> URL: {output.html_url}</div>
                        </div>
                    </div>
                    )
                }) : false}
            </div>
        )
    



}

export default Followers;