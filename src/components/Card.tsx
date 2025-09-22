"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Eye } from "lucide-react";

interface WorkerCardProps {
  id: number;
  name: string;
  skill: string;
  price: number;
  city?: string;
  imageUrl?: string;
  phone?: string;
}

export default function WorkerCard({
  id,
  name,
  skill,
  price,
  city,
  imageUrl,
  phone,
}: WorkerCardProps) {
  return (
    <div className="bg-[#12181b] border border-gray-800 shadow-lg rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      {/* Avatar / Image */}
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt={name}
          width={100}
          height={100}
          className="rounded-full mb-4 object-cover border-4 border-gray-700 shadow-md"
        />
      ) : (
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center text-2xl font-bold text-white mb-4 shadow-inner">
          {name[0]}
        </div>
      )}

      {/* Worker Info */}
      <h3 className="text-xl font-bold text-white">{name}</h3>
      <p className="text-gray-400 text-sm">{city}</p>
      <span className="inline-block bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm font-medium mt-2 mb-3">
        {skill}
      </span>

      {/* Price */}
      <div className="text-center mb-6">
        <span className="text-2xl font-bold text-green-400">₹{price}</span>
        <p className="text-gray-400 text-sm">per day</p>
      </div>

      {/* Action Buttons */}
      <div className="w-full flex flex-col sm:flex-row gap-3">
        <Link
          href={`/workers/${id}`}
          className="flex items-center justify-center gap-2 w-full px-4 py-2 rounded-lg bg-gray-700 text-white font-medium hover:bg-gray-600 transition"
        >
          <Eye size={18} /> View
        </Link>

        {phone && (
          <a
            href={`tel:${phone}`}
            className="flex items-center justify-center gap-2 w-full px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-500 transition"
          >
            <Phone size={18} /> Call
          </a>
        )}
      </div>
    </div>
  );
}
