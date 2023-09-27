const Gift = ({gift}) => {

    return(
        <div>
            <img src={gift.image} alt={''} className="gift-image" />
        </div>
    )
}

export default Gift