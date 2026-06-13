import { create } from "zustand";

interface AppStore {
  selectedAppId: string;
  selectedNodeId: string | null;
  isMobilePanelOpen: boolean;
  activeInspectorTab: string;

  setSelectedAppId: (id: string) => void;
  setSelectedNodeId: (id: string | null) => void;
  setMobilePanelOpen: (value: boolean) => void;
  setActiveInspectorTab: (tab: string) => void;
}

export const useAppStore = create<AppStore>((set) => ({
  selectedAppId: "1",
  selectedNodeId: null,
  isMobilePanelOpen: false,
  activeInspectorTab: "config",

  setSelectedAppId: (id) => set({ selectedAppId: id }),
  setSelectedNodeId: (id) => set({ selectedNodeId: id }),
  setMobilePanelOpen: (value) =>
    set({ isMobilePanelOpen: value }),
  setActiveInspectorTab: (tab) =>
    set({ activeInspectorTab: tab }),
}));