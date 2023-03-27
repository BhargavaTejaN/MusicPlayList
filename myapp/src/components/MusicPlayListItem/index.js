import './index.css'

import {AiOutlineDelete} from 'react-icons/ai'

const MusicPlayListItem = props => {
  const {details, deleteItem} = props
  const {id, imageUrl, name, genre, duration} = details

  const onDeleteItem = () => {
    deleteItem(id)
  }

  return (
    <li className="">
      <div className="total-container">
        <div className="image-textContainer">
          <img className="img" src={imageUrl} alt="track" />
          <div className="text-container">
            <p className="name">{name}</p>
            <p className="genre">{genre}</p>
          </div>
        </div>
        <div className="time-deleteContainer">
          <div className="">
            <p className="duration">{duration}</p>
          </div>
          <div className="">
            <button
              data-testid="delete"
              onClick={onDeleteItem}
              type="button"
              className="button"
            >
              <AiOutlineDelete className="button-img" />
            </button>
          </div>
        </div>
      </div>
    </li>
  )
}

export default MusicPlayListItem
