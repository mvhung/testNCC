import './content.css';
import logo from './logoNCC.png';
import logo2 from './html-icon.png';
function Content() {
    return (
        <div style={{ display: 'flex' }}>
            <div className="offset-container"></div>
            <div className="container">
                <div className="logo">
                    <img src={logo} />
                </div>
                <div className="description">
                    <h3> Lorem ipsum dolor sit asmet?</h3>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique consequat placerat.
                        Vestibulum auctor pellentesque sem, eu posuere erat hendrerit quis. Maecenas vel consequat
                        turpis. Nam facilisis, ligula in mattis sodales, augue justo tristique nulla, sed lacinia ante
                        eros ut mi. Morbi vitae diam augue. Aliquam vel mauris a nibh auctor commodo. Praesent et nisi
                        eu justo eleifend convallis. Quisque suscipit maximus vestibulum. Phasellus congue mollis orci,
                        sit amet luctus augue tristique eu. Donec vulputate odio neque, sed semper turpis pellentesque
                        a.
                    </p>
                </div>
                <div className="content-list">
                    <div className="content-item">
                        <h3>Lorem ipsum dolor sit amet</h3>
                        <div className='content-body'>
                            <img src={logo2} />
                            <span>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus
                                libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat
                                condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque
                                ultrices liquam egestas nunc at
                            </span>
                        </div>
                        <p>
                            ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean
                            consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue.
                            Pellentesque ultrices vestibulum mattis.
                        </p>
                    </div>
                    <div className="content-item" style={{margin:" 0 32px"}}>
                        <h3>Lorem ipsum dolor sit amet</h3>
                        <div className='content-body'>
                            <img src={logo2} />
                            <span>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus
                                libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat
                                condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque
                                ultrices liquam egestas nunc at
                            </span>
                        </div>
                        <p>
                            ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean
                            consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue.
                            Pellentesque ultrices vestibulum mattis.
                        </p>
                    </div>
                    <div className="content-item">
                        <h3>Lorem ipsum dolor sit amet</h3>
                        <div className='content-body'>
                            <img src={logo2} />
                            <span>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus
                                libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat
                                condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque
                                ultrices liquam egestas nunc at
                            </span>
                        </div>
                        <p>
                            ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean
                            consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue.
                            Pellentesque ultrices vestibulum mattis.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;
