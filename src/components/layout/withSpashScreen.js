import React, { Component} from 'react';
import { HashLoader } from 'react-spinners';
import { PlatinoMotors } from '../../assets';

function LoadingWelcomeMessage() {
    return (
        <div className="bg-black bg-opacity-10 h-screen flex px-5 flex-col justify-center items-center">
            <div className='mb-8'>
                <img src={PlatinoMotors} alt="Platino HN" className='w-72' />
            </div>
            <div>
                <HashLoader color='#E02523' height={10} width={200} />
            </div>
            <div className='mt-8 text-gray-500 font-pop font-semibold text-xl'>
                Cargando...
            </div>
        </div>
    );
};

function WithSplashScreen(WrappedComponent) {
    return class extends Component {
      constructor(props) {
        super(props);
        this.state = {
          loading: true,
        };
      }
  
      async componentDidMount() {
        try {
         //TODO hacer llamada a la API (Cuando exista)
          setTimeout(() => {
            this.setState({
              loading: false,
            });
          }, 3000)
        } catch (err) {
          console.log(err);
          this.setState({
            loading: false,
          });
        }
      }
  
      render() {
        if (this.state.loading) return LoadingWelcomeMessage();
        return <WrappedComponent {...this.props} />;
      }
    };
  }

export default WithSplashScreen;