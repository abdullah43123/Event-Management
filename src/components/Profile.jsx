export default function Profile() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'))  
  return (
      <section id="profile" className="space-y-6">
        <h2 className="text-3xl font-bold mb-6">My Profile</h2>
        <div className="bg-white p-6 rounded-lg shadow max-w-lg mx-auto space-y-4">
          <div>
            <label className="block text-sm font-medium">{currentUser.name}</label>
            {/* <input className="w-full border p-2 rounded" value="Abdullah" disabled /> */}
          </div>
          <div>
            <label className="block text-sm font-medium">{currentUser.email}</label>
            {/* <input className="w-full border p-2 rounded" value="aabdullah@gmail.com" disabled /> */}
          </div>
        </div>
      </section>
    );
  }
  