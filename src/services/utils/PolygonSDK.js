import PolygonID from '@0xpolygonid/js-sdk';

const PolygonSDK = () => {
    
  async function login(email, password) {
    // Implement login logic using PolygonID
    await PolygonID.login(email, password);
  }

  async function register(email, password) {
    // Implement registration logic using PolygonID
    await PolygonID.register(email, password);
  }

  async function forgotPassword(email) {
    // Implement forgot password logic using PolygonID
    await PolygonID.forgotPassword(email);
  }
}

export default PolygonSDK;
