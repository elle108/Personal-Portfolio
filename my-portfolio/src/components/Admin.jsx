import { useState, useEffect } from 'react';
import { auth, db } from '../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { LogOut } from 'lucide-react';

// Admin dashboard component to view contact submissions
function Admin() {
  const [user, setUser] = useState(null);
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Check authentication and fetch contacts
  useEffect(() => {
    // Fetch contact submissions from Firestore
    const fetchContacts = async () => {
      try {
        const q = query(collection(db, 'contacts'), orderBy('createdAt', 'desc'));
        const querySnapshot = await getDocs(q);
        const contactsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setContacts(contactsData);
      } catch (error) {
        console.error('Error fetching contacts:', error);
      }
    };

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        fetchContacts();
      } else {
        navigate('/login');
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [navigate]);

  // Handle logout and redirect to login page
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  // Format Firestore timestamp
  const formatDate = (timestamp) => {
    if (!timestamp) return 'N/A';
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
  };

  // Loading state
  if (loading) {
    return (
      <div className="flex min-h-[80vh] items-center justify-center pt-24 text-ink-soft">
        Loading...
      </div>
    );
  }

  // Display admin dashboard
  return (
    <div className="mx-auto min-h-[80vh] max-w-4xl px-4 pb-20 pt-32 sm:px-6">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-4xl text-ink">Inbox</h1>
          <p className="text-ink-soft">
            {contacts.length} message{contacts.length === 1 ? '' : 's'} from the contact form
            {user?.email && <> · signed in as {user.email}</>}
          </p>
        </div>
        <button
          onClick={handleLogout}
          className="inline-flex items-center gap-2 rounded-full border border-pink bg-paper px-5 py-2 font-semibold text-rose hover:bg-blush"
        >
          <LogOut className="h-4 w-4" /> Log out
        </button>
      </div>

      {contacts.length === 0 ? (
        <p className="rounded-3xl bg-paper p-8 text-center text-ink-soft shadow-card">No contact submissions yet.</p>
      ) : (
        <ul className="space-y-4">
          {contacts.map((contact) => (
            <li key={contact.id} className="rounded-3xl border border-line bg-paper p-6 shadow-card">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <p className="font-semibold text-ink">
                  {contact.name}{' '}
                  <a href={`mailto:${contact.email}`} className="font-normal text-rose hover:underline">
                    {contact.email}
                  </a>
                </p>
                <p className="text-sm text-ink-soft">{formatDate(contact.createdAt)}</p>
              </div>
              <p className="mt-3 whitespace-pre-wrap leading-relaxed text-ink-soft">{contact.message}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Admin;
