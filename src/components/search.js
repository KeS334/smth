import React from 'react';

class Search extends React.Component{
    render() {
        return (
            <div>

                <div className="description">
                    <h1>Быстрый и удобный поиск IT cобытий</h1>
                    <h2>Найдите нужное мероприятие по всей Украине</h2>
                </div>
                <div className="serchZone">
                    <div className="options grid">
                        <div className="category"><input type="text" placeholder="Категория" />  </div>
                        <div className="date"><input type="date" placeholder="Дата" />  </div>
                        <div className="town"><input type="text" placeholder="Город" /> </div>
                        <div className="price grid"><input type="range" placeholder="Цена" />
                            </div>

                    </div>

                    <div className="button grid">
                        <button>Поиск</button>
                    </div>
                </div>

            </div>

    );
    }
}

export default Search;