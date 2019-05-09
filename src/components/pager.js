import React from 'react';


class Pager extends React.Component{
    render() {
        return (

                <div class="pager grid">
                    <div>
                        <p>&lt;</p>
                    </div>
                    <div>
                        <p>1</p>
                    </div>
                    <div>
                        <p>2</p>
                    </div>
                    <div>
                        <p>...</p>
                    </div>
                    <div>
                        <p>20</p>
                    </div>
                    <div>
                        <p>&gt;</p>
                    </div>
                </div>


        );
    }
}

export default Pager;