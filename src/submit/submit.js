import './style.css'
import './scoreboard.css'
import React, { Component } from 'react';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined'

class Scoreboard extends Component {
    state = {

	players: [
	    {
      name: "Physics",
      score: 31,
    },
    {
      name: "Chemistry",
      score: 31,
    },
    {
      name: "Mathematics",
      score: 20,
    },
    {
      name: "Computer Science",
      score: 50,
    },
	    {
      name: "Biology",
      score: 50,
    },
  ]
    }


  onScoreChange = function (index, delta) {
    this.state.players[index].score += delta;
    this.setState(this.state);
  }


  render() {
    return (
      <div className="scoreboard">
        <Header players={this.state.players} />
        <div className="players">
          {this.state.players.map(function(player, index) {
             return (
               <Player
                 name={player.name}
                 score={player.score}
                 key={player.name}
                 onScoreChange={(delta) => this.onScoreChange(index, delta)}
                 onRemove={() => this.onRemovePlayer(index)}
               />
             );
           }.bind(this))}
        </div>
	    {   /*     <AddPlayerForm onAdd={this.onAddPlayer} */}
      </div>
    );
  }
};

function Header(props) {
  return (
    <div className="header">
      <Stats players={props.players} />
      <h1>Scoreboard</h1>
    </div>
  );
}


function Stats(props) {
  const playerCount = props.players.length;
  const totalPoints = props.players.reduce((total, player)=> {
    return total + player.score;
  }, 0);

  return (
    <table className="stats">
      <tbody>
        <tr>
          <td>Name:</td>
          <td>{playerCount}</td>
        </tr>
        <tr>
          <td>Total Score:</td>
          <td>{totalPoints}</td>
        </tr>
      </tbody>

    </table>
  )
}

Stats.propTypes = {
    players: []
};

function Player(props) {
  return (
    <div className="player">
      <div className="player-name">
         {props.name}
      </div>
      <div className="player-score">
        <Counter onChange={props.onScoreChange} score={props.score} />
      </div>
    </div>
  );
}
function Counter(props) {
  return (
    <div className="counter" >
      <div className="counter-score"> {props.score} </div>
    </div>
  );
}


class Submit  extends Component {
       
    render() { 
        const {dark} =this.props
        const coloring={
            darkbg:'rgb(1,12,50)',
            lightbg:'white',
            darkcl:'black',
            lightcl:'white',
            dbdleft:'3px solid rgb(1,12,50)',
            dbdright:'3px solid white'
        }
        const {review,score,total,submit} =this.props
        const percent=()=>{
            return(Math.ceil((score()/total)*100))
	}
        return ( 
        <div className='home_f' style={dark?{borderLeft:coloring.dbdright,borderRight:coloring.dbdright}:{backgroundColor:coloring.lightbg }}>
          <div className='center' style={!dark?{backgroundColor:coloring.darkbg}:{backgroundColor:coloring.lightbg }}>
		<h1 className='h_one_'>Great Job &#128640;</h1>
		<Scoreboard />
            <div className='tick'><CheckOutlinedIcon style={{fontSize:'100px',color:'rgb(34, 185, 102)',fontWeight:'lighter'}} /></div>
            <p style={{backgroundColor:"transparent"}}>{percent()+'%'}</p>
            <div className='line_'><div className='s_line_' style={{width:`${percent()}%`}}> </div></div>
            <p style={{backgroundColor:"transparent"}}>Your Score:{score()+"/"+total}</p>
            <button onClick={()=>{review(); submit();}} className='review' tyle={dark?{backgroundColor:coloring.darkbg}:{backgroundColor:coloring.lightbg ,color:'rgb(1,12,50)'}}>Review Now</button>
         </div>
        </div> 
         );
    }
    
}








export {Submit ,Scoreboard};
