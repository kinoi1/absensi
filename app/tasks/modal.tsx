"use client";
import React, { useEffect } from "react";
import { Calendar, Flag, Plus, Shield, Tag, X, Upload, User } from "lucide-react";

interface CreateTaskModalProps {
  open: boolean;
  onClose: () => void;
}

export default function CreateTaskModal({
  open,
  onClose,
}: CreateTaskModalProps) {
  
  // Mencegah background HTML ikut ter-scroll saat modal terbuka
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      {/* PERUBAHAN DI SINI:
        1. Mengubah h-[90vh] menjadi max-h-[90vh] agar fleksibel.
        2. Menambahkan flex flex-col agar Header dan Konten terpisah secara vertikal dengan benar.
      */}
      <div className="w-full max-w-5xl max-h-[90vh] rounded-xl bg-zinc-900 border border-zinc-800 shadow-2xl flex flex-col">
        
        {/* Header (Tetap diam di atas, tidak ikut ter-scroll) */}
        <div className="flex items-start justify-between p-6 flex-shrink-0">
          <input
            type="text"
            placeholder="Untitled"
            className="text-4xl font-bold bg-transparent outline-none text-white placeholder:text-zinc-500 w-full mr-4"
          />

          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white whitespace-nowrap"
            >
              Cancel
            </button>

            <button className="px-4 py-2 rounded-lg bg-[#4f46e5] hover:bg-[#4338ca] text-white whitespace-nowrap">
              Save
            </button>

            <button
              onClick={onClose}
              className="text-zinc-400 hover:text-white ml-2"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* PERUBAHAN DI SINI:
          Menambahkan flex-1 dan min-h-0 agar area ini mengambil sisa ruang yang ada 
          dan mengaktifkan scroll internalnya saat konten melebihi batas max-h modal.
        */}
        <div className="overflow-y-auto flex-1 min-h-0">
          {/* Properties */}
          <div className="px-6">
            <div className="space-y-4">
              <PropertyRow
                icon={<Tag size={18} />}
                label="Label"
                buttonText="Add label"
              />

              <PropertyRow
                icon={<Calendar size={18} />}
                label="Due Date"
                buttonText="Add date"
              />

              <PropertyRow
                icon={<Flag size={18} />}
                label="Priority"
                buttonText="Add priority"
              />

              <PropertyRow
                icon={<Shield size={18} />}
                label="Status"
                buttonText="Add status"
              />
              <PropertyRow
                icon={<User size={18} />}
                label="Assign to"
                buttonText="Add Assign to"
              />
            </div>

            <button className="mt-4 px-3 py-2 text-sm rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300">
              + Add more properties
            </button>
          </div>

          {/* Attachment */}
          <div className="px-6 mt-8">
            <div className="border-t border-zinc-800 pt-6">
              <h3 className="text-lg font-semibold text-white mb-4">
                ATTACHMENTS
              </h3>

              <div className="border-2 border-dashed border-[#4f46e5]/50 rounded-xl p-12">
                <div className="flex flex-col items-center text-center">
                  <Upload className="text-[#4f46e5] mb-4" size={32} />

                  <p className="text-zinc-400">Drag & drop your files here</p>

                  <span className="text-zinc-500 my-3">OR</span>

                  <button className="px-4 py-2 rounded-lg border border-[#4f46e5] text-[#4f46e5] hover:bg-[#4f46e5] hover:text-white transition">
                    Browse files
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="px-6 mt-8 pb-6">
            <div className="border-t border-zinc-800 pt-6">
              <h3 className="text-lg font-semibold text-white mb-4">
                DESCRIPTION
              </h3>

              <textarea
                rows={5}
                placeholder="Add a more detailed description..."
                className="w-full rounded-xl bg-zinc-800 border border-zinc-700 p-4 text-white outline-none focus:border-[#4f46e5]"
              />

              <div className="mt-6">
                <input
                  type="text"
                  placeholder="Add a comment..."
                  className="w-full rounded-lg bg-zinc-800 border border-zinc-700 px-4 py-3 text-white outline-none focus:border-[#4f46e5]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PropertyRow({
  icon,
  label,
  buttonText,
}: {
  icon: React.ReactNode;
  label: string;
  buttonText: string;
}) {
  return (
    <div className="flex items-center gap-6">
      <div className="flex items-center gap-2 w-40 text-zinc-400">
        {icon}
        <span>{label}</span>
      </div>

      <button className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-800 text-zinc-300 hover:bg-zinc-700">
        <Plus size={14} />
        {buttonText}
      </button>
    </div>
  );
}