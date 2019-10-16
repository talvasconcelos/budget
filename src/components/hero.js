const styles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '25vh',
    borderRadius: '10px',
    padding: '20px',
    color: '#fff',
    boxShadow: '5px 5px 15px 5px rgba(168,168,168,1)',
    background: 'linear-gradient(130deg, rgba(7,0,120,1) 0%, rgba(255,0,204,1) 100%)'
}

const Hero = () => (
    <div style={styles}>
        <div style={{width: '50%'}}>
            <h4>Available Balance</h4>
        </div>
        <div style={{width: '50%', textAlign: 'right'}}>
            <h1>€65.00</h1>
        </div>
    </div>
)


export default Hero