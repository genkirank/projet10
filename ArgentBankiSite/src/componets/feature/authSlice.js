import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../api/apiConfig";

const initialState = {
  user: null,
  token: null,
  status: "idle",
  error: null,
};

// Thunk pour la connexion de l'utilisateur
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, thunkApi) => {
    try {
      const response = await fetch(`${BASE_URL}/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        return thunkApi.rejectWithValue(data.message || "Erreur de connexion");
      }

      return data.body; 
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

// Thunk pour récupérer le profil utilisateur
export const getUserProfile = createAsyncThunk(
  "auth/getUserProfile",
  async (_, thunkApi) => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(`${BASE_URL}/user/profile`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        return thunkApi.rejectWithValue(data.message || "Erreur de récupération du profil");
      }
      console.log(token)

        return data.body; 
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

// Thunk pour mettre à jour le nom d'utilisateur
export const updateUserName = createAsyncThunk(
  "auth/updateUserName",
  async ({ userName }, thunkApi) => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(`${BASE_URL}/user/profile`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ userName }),
      });

      const data = await response.json();

      if (!response.ok) {
        return thunkApi.rejectWithValue(data.message || "Erreur de mise à jour du nom d'utilisateur");
      }

      return data.body; 
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

// Slice Redux
const authSlice = createSlice({
  name: "auth",
  initialState,
    reducers: {
        logout: (state) => {
            state.user = null;
            state.token = null;
            localStorage.removeItem('token');
          }
  },
  extraReducers: (builder) => {
    // Gestion de loginUser
    builder.addCase(loginUser.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.user = action.payload;
      state.token = action.payload.token;
      localStorage.setItem("token", action.payload.token); 
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    });


    // Gestion de getUserProfile
    builder.addCase(getUserProfile.pending, (state) => {
      state.status = "loading user info";
        state.error = null;
        
    });
    builder.addCase(getUserProfile.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.user = { ...state.user, ...action.payload };
    });
    builder.addCase(getUserProfile.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    });

    // Gestion de updateUserName
    builder.addCase(updateUserName.pending, (state) => {
      state.status = "loading update user";
      state.error = null;
    });
    builder.addCase(updateUserName.fulfilled, (state, action) => {
      state.status = "succeeded";
      if (state.user) {
        state.user.userName = action.payload.userName; 
      }
    });
    builder.addCase(updateUserName.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    });
  },
});export const { logout } = authSlice.actions;

export default authSlice.reducer;
