import { recomMusic, newMusic } from "./Home";
import { searchMusic, search } from "@/api/Search";
import { getSongById, getLyricById } from "@/api/Play";
export const recomMusicApi = recomMusic;
export const newMusicApi = newMusic;
export const schApi = searchMusic;
export const searchApi = search;
export const getSongByIdAPI = getSongById;
export const getLyricByIdAPI = getLyricById;
