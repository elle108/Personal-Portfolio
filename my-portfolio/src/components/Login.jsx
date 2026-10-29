import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { Lock } from 'lucide-react';

const inputClass =
  'w-full rounded-2xl border border-line bg-cream px-4 py-3 text-ink outline-none transition focus:border-pink focus:bg-paper focus:ring-4 focus:ring-pink/25';

// Login page component with Firebase authentication
function Login() {
  // State for inputs and UI feedback
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Handle login form submission
  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/admin');
    } catch (err) {
      setError('Failed to log in. Check your email and password. You must have admin access.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Component for login form
  return (
    <div className="flex min-h-[80vh] items-center justify-center px-4 pt-24">
      <form onSubmit={handleLogin} className="w-full max-w-sm space-y-4 rounded-[2rem] border border-line bg-paper p-8 shadow-card">
        <span className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-blush text-rose">
          <Lock className="h-5 w-5" />
        </span>
        <h1 className="text-center font-display text-2xl text-ink">Admin login</h1>

        <label className="block">
          <span className="mb-1.5 block text-sm font-bold text-ink">Email</span>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required autoComplete="username" className={inputClass} />
        </label>

        <label className="block">
          <span className="mb-1.5 block text-sm font-bold text-ink">Password</span>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required autoComplete="current-password" className={inputClass} />
        </label>

        {error && <p className="rounded-2xl bg-blush px-4 py-3 text-sm font-semibold text-rose" role="alert">{error}</p>}

        <button type="submit" disabled={loading} className="w-full rounded-full bg-ink px-6 py-3 font-semibold text-white shadow-soft transition hover:bg-rose disabled:opacity-70">
          {loading ? 'Logging in...' : 'Log in'}
        </button>
      </form>
    </div>
  );
}

export default Login;
