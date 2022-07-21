import React, { Component, useEffect, useState } from 'react';
import { HashLoader } from 'react-spinners';
import { PlatinoMotors } from '../../assets';
import ScrollToTop from '../../utils/scroll_to_top';
function LoadingWelcomeMessage() {
    return (
        <div className="bg-blackCustom-900 h-screen flex px-5 flex-col justify-center items-center">
            <div className='mb-8'>
                <img src={PlatinoMotors} alt="Platino HN" className='w-72' />
            </div>
            <div>
                <HashLoader color='#FFFFFF' height={10} width={200} />
            </div>
            <div className='mt-8 text-white'>
                Cargando...
            </div>
        </div>
    );
};
function withSpashScreen(WrappedComponent) {
    const [isLoading, setIsLoading] = useState(true);
     componentDidMount() 
     {
        try {
         
            useEffect(() => {
                setTimeout(() => {
                    setIsLoading(false);
                }, 4000)
                ScrollToTop();
            }, []);
            setTimeout(() => {
                this.setState({
                    loading: false,
                })
            })
        } catch (err) {
            console.log(err);
            this.setState({
                loading: false,
            })
        }
    }
    render()
     {
        if (this.state.loading) return LoadingWelcomeMessage();
        return <WrappedComponent {...this.props} />
    }


    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                loading: true,
            }
        }
       
    };
};

export default withSpashScreen;