"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  Calendar,
  Flag,
  Plus,
  Shield,
  Tag,
  X,
  Upload,
  User,
} from "lucide-react";
import SearchableDropdown from "../../components/tasks/searchDropdown";

interface CreateTaskModalProps {
  open: boolean;
  onClose?: () => void;
}
const cities = [
  { value: "jakarta", label: "Jakarta" },
  { value: "bandung", label: "Bandung" },
  { value: "surabaya", label: "Surabaya" },
  { value: "yogyakarta", label: "Yogyakarta" },
];

export default function CreateTaskModal({
  open,
  onClose,
}: CreateTaskModalProps) {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [selectedData, setSelectedData] = useState<Record<string, any>>({});

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
        onClose?.();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="w-full max-w-5xl max-h-[90vh] rounded-xl bg-zinc-900 border border-zinc-800 shadow-2xl flex flex-col">
        {/* Header (Tetap diam di atas, tidak ikut ter-scroll) */}
        <div className="flex items-start justify-between p-6 flex-shrink-0">
          <input
            type="text"
            placeholder="Nama Task"
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

        <div className="overflow-y-auto flex-1 min-h-0">
          {/* Properties */}
          <div className="px-6">
            <div className="space-y-4">
              <PropertyRow
                icon={<Tag size={18} />}
                label="Label"
                buttonText="Add label"
                dataSelect={cities}
                selectedData={selectedData}
                onSelect={(label, item) => {
                  setSelectedData((prev) => ({
                    ...prev,
                    [label]: item,
                  }));
                }}
              />

              <PropertyRow
                icon={<Calendar size={18} />}
                label="Due Date"
                buttonText="Add date"
                dataSelect={cities}
                selectedData={selectedData}
                onSelect={(label, item) => {
                  setSelectedData((prev) => ({
                    ...prev,
                    [label]: item,
                  }));
                }}
              />

              <PropertyRow
                icon={<Flag size={18} />}
                label="Priority"
                buttonText="Add priority"
                dataSelect={cities}
                selectedData={selectedData}
                onSelect={(label, item) => {
                  setSelectedData((prev) => ({
                    ...prev,
                    [label]: item,
                  }));
                }}
              />

              <PropertyRow
                icon={<Shield size={18} />}
                label="Status"
                buttonText="Add status"
                dataSelect={cities}
                selectedData={selectedData}
                onSelect={(label, item) => {
                  setSelectedData((prev) => ({
                    ...prev,
                    [label]: item,
                  }));
                }}
              />
              <PropertyRow
                icon={<User size={18} />}
                label="Assign to"
                buttonText="Add Assign to"
                dataSelect={cities}
                selectedData={selectedData}
                onSelect={(label, item) => {
                  setSelectedData((prev) => ({
                    ...prev,
                    [label]: item,
                  }));
                }}
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
  dataSelect,
  selectedData,
  onSelect,
}: {
  icon: React.ReactNode;
  label: string;
  buttonText: string;
  dataSelect: any;
  selectedData: Record<string, any>;
  onSelect: (label: string, item: any) => void;
}) {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [showDropdown, setShowDropdown] = useState(false);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
        onClose?.();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const [selectedDate, setSelectedDate] = useState("");
  const placeholder = "Pilih tanggal";
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = e.target.value;

    setSelectedDate(date);

    if (onSelect) {
      onSelect(date);
    }
  };
  return (
    <div className="flex items-center gap-6">
      <div className="flex items-center gap-2 w-40 text-zinc-400">
        {icon}
        <span>{label}</span>
      </div>

      {!showDropdown ? (
        <button
          onClick={() => setShowDropdown(true)}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
        >
          <Plus size={14} />
          {selectedData?.[label]?.label ??
            selectedData?.[label]?.name ??
            `Tambah ${label}`}
        </button>
      ) : label === "Due Date" ? (
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => {
            setSelectedDate(e.target.value);
          }}
          onBlur={() => {
            onSelect?.(label, selectedDate);
            setShowDropdown(false);
          }}
          className="w-full rounded-lg border px-4 py-2"
        />
      ) : (
        <SearchableDropdown
          options={dataSelect}
          onSelect={(item) => {
            onSelect?.(label, item);
            setShowDropdown(false);
          }}
          onClose={() => {
            setShowDropdown(false);
          }}
        />
      )}
    </div>
  );
}
