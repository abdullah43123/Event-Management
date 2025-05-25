import { supabase } from "./Supabase"

export async function CreateUser({ Email, Password, Name }) {
  try {
    const { data, error } = await supabase.auth.signUp(
      {
        email: Email,
        password: Password,
        options: {
          data: {
            name: Name
          }
        }
      }
    )
    if (data) console.log(data);
    if (error) throw error;
    return data;
  } catch (error) {
    console.log(error);

  }
}


export async function SignInUser({ Email, Password }) {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: Email,
      password: Password,
    })
    if (data) {
      console.log(data);
    }
    if (error) throw error;
    return data;
  } catch (error) {
    console.log(error);

  }
}

export async function InsertUser({ Email, userId, Name }) {
  try {
    const { data, error } = await supabase
      .from('users')
      .insert({ 'name': Name, 'email': Email, "user_id": userId })
      .select()

    if (data) {
      console.log(data);
      return data;
    }

    if (error) throw error;
  } catch (error) {
    console.log(error);

  }
}

export async function FilterUser({Email}) {
  try {
    const { data, error } = await supabase
      .from('users')
      .select()
      .eq('email', Email)

    if (data) {
      // console.log(data);
      return data;
    }
    if (error) throw error;
  } catch (error) {
    console.log(error);

  }
}

export async function checkSession() {
  try {
    const { data, error } = await supabase.auth.getSession()

    if(data){
      return data;
    }

    if(error) throw error;
  } catch (error) {
    console.log(error);
    
  }
}


