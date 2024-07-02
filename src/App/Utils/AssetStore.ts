import { createStore, StoreApi } from 'zustand/vanilla';
import * as THREE from 'three';

export interface AssetToLoad {
	id: string;
	path: string;
	type: string;
}

export interface AssetStoreState {
	assetsToLoad: AssetToLoad[];
	loadedAssets: { [key: string]: { scene: THREE.Object3D; animations: THREE.AnimationClip[] } };
	addLoadedAsset: (asset: { scene: THREE.Object3D; animations: THREE.AnimationClip[] }, id: string) => void;
}

const assetsToLoad: AssetToLoad[] = [
	{
		id: 'avatar',
		path: `${import.meta.env.BASE_URL}models/avatar.glb`,
		type: 'model',
	},
	{
		id: 'environment',
		path: `${import.meta.env.BASE_URL}models/environment.glb`,
		type: 'model',
	},
];

const assetStore: StoreApi<AssetStoreState> = createStore((set) => ({
	assetsToLoad,
	loadedAssets: {},
	addLoadedAsset: (asset: any, id: any) =>
		set((state: any) => ({
			loadedAssets: {
				...state.loadedAssets,
				[id]: asset,
			},
		})),
}));

export default assetStore;