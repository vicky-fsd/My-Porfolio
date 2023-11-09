import "./profile-photo.css";
import profileImg from "./photo.jpg";

const ProfilePhoto = () => {
  const title = "Vignesh Durairaj - MERN stack web developer - "
  const letter = title.split('')
  console.log(letter);
  return (
    <div className="profile-img-box scale-animation">
      <div className="img">
        <img src={profileImg} alt="" />
      </div>
      <div className="text">{
        letter.map((char, i)=><span key={char} style={{transform: `rotate(${i*7.5}deg)`}}>{char}</span>)
      }</div>
    </div>
  );
};

export default ProfilePhoto;
