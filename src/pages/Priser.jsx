import MembershipPrices from '../components/MembershipPrices';
import '../css/priser.css';

const membershipUrl = 'https://auth.nif.buypass.no/auth/realms/nif/protocol/openid-connect/auth?client_id=norges-bokseforbund-client&redirect_uri=https%3A%2F%2Fmedlem.bokseklubb.no%2F&response_type=code&scope=openid%20profile&code_challenge=b31-gLfZWlr-WWiVjPVaNjepxZjp84IILEivAgP2Xvo&code_challenge_method=S256&state=OpenIdConnect.AuthenticationProperties%3DAZUrnS4gTUZkhoGODHZTfDj3kVrhTVEOnlBGCRWRLah7wssk0vjaq-JPYMij9n2NR6NqyGjdGJzI3w2kHBp98j7s7FvMozsJXGHs5NZVFIBxItrrgA3V8fb2VTbUD7dZ8wXH9a7fa9MRQCzM-zNp68_4J2f732fEHZ7xvCO1fMTOx6s1g_JLg2CLDo28Y0y2iAhxYYENdPoLs78TWfFOrn3GWF-Dsbr2kfVDnOzoMjj5d4-r6xPyKxaG2N5QqrBdQ-8of9WEXOnpNlluVQQT68-_fJNisiZ1JWJj_B6A6Rc&nonce=639121263303546706.NDExMTRlMWItMzVmNi00ZjgzLTgyZDEtMjY1NmNiMWE2ODEyNjgyNjVhODMtNzQ1Yi00NDNiLThjNmYtZDU2NGMzOGE1ZTY1&x-client-SKU=ID_NET461&x-client-ver=5.3.0.0';

const prices = [
    {
        name: 'BARN',
        amount: 'KR 299,- PR/MND',
        href: membershipUrl,
    },
    {
        name: 'STUDENT',
        amount: 'KR 499,- PR/MND',
        href: membershipUrl,
    },
    {
        name: 'VOKSEN',
        amount: 'KR 599,- PR/MND',
        href: membershipUrl,
    },
];

function Priser() {
    return (
        <main className="priser-page">
            <h1>MEDLEMSPRISER</h1>
            <MembershipPrices prices={prices} />
        </main>
    );
}

export default Priser;
