import { supabase } from "./Supabase"

export async function insertEventData({ Title, Description, Date_Time, Loc, Category, ImageUrl, Status, UserId, Updated_At }) {
    try {
        const { data, error } = await supabase
            .from('event')
            .insert({ 'title': Title, 'description': Description, 'date_time': Date_Time, 'location': Loc, 'category': Category, 'image_url': ImageUrl, 'status': Status, 'created_by': UserId, 'updated_at': Updated_At })
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

export async function uploadImage({ User, UserProvided }) {
    try {
        const { data, error } = await supabase
            .storage
            .from('documents')
            .upload(`public/${User}`, UserProvided, {
                cacheControl: '3600',
                upsert: false
            }
            )
        if (data) {
            return data;

        }

        if (error) throw error;
    } catch (error) {
        console.log(error);

    }

}


export async function publicUrl({ UserDefine }) {
    try {
        const { data } = supabase
            .storage
            .from('documents')
            .getPublicUrl(`${UserDefine}`)
        return data;
    } catch (error) {
        console.log(error);

    }
}

export async function updateEventData({ ColName, EqCol, UpdateData, UserId }) {
    try {
        const { data, error } = await supabase
            .from('event')
            .update({ [ColName]: UpdateData })
            .eq(EqCol, UserId)
            .select()

        if (data) {
            return data;
        }

        if (error) throw error;
    } catch (error) {
        console.log(error);

    }
}


export async function getEventData() {
    try {
        const { data, error } = await supabase
            .from('event')
            .select()
        return data
    } catch (error) {
        console.log(error);        
    }
}
