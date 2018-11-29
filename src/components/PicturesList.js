import React, {Fragment} from 'react';

const PicturesList = ({list = [], onLoadMore}) => {
    return (
        <Fragment>
            <div className='pictures-list'>
                {list.map(item => {
                    const srcPath = 'https://farm' + item.farm + '.staticflickr.com/' + item.server + '/' + item.id + '_' + item.secret + '.jpg';
                    return (
                        <div
                            key={item.id}
                            className='img'
                        >
                            <img src={srcPath} alt=""/>
                        </div>
                    )
                })}
            </div>
            {list.length > 0 ? <button
                className='more-btn'
                onClick={onLoadMore}
            >
                Show More
            </button>
            : ''}
        </Fragment>
    )
};

export default PicturesList;