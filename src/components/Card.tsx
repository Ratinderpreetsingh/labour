"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Eye } from "lucide-react";

interface WorkerCardProps {
  id: number;
  name: string;
  skill: string;
  price: number;
  imageUrl?: string;
  phone?: string;
}

export default function WorkerCard({
  id,
  name,
  skill,
  price,
  imageUrl,
  phone,
}: WorkerCardProps) {
  return (
    <div className="bg-white border border-gray-200 shadow-md rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
      {/* Avatar / Image */}
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt={name}
          width={100}
          height={100}
          className="rounded-full mb-4 object-cover border-4 border-gray-100 shadow-sm"
        />
      ) : (
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-2xl font-bold text-gray-700 mb-4 shadow-inner">
          {name[0]}
        </div>
      )}

      {/* Worker Info */}
      <h3 className="text-xl font-bold text-gray-900">{name}</h3>
      <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium mt-2 mb-3">
        {skill}
      </span>

      {/* Price */}
      <div className="text-center mb-6">
        <span className="text-2xl font-bold text-green-600">₹{price}</span>
        <p className="text-gray-500 text-sm">per day</p>
      </div>

      {/* Action Buttons */}
      <div className="w-full flex flex-col sm:flex-row gap-3">
        <Link
          href={`/workers/${id}`}
          className="flex items-center justify-center gap-2 w-full px-4 py-2 rounded-lg bg-gray-900 text-white font-medium hover:bg-gray-800 transition"
        >
          <Eye size={18} /> View
        </Link>

        {phone && (
          <a
            href={`tel:${phone}`}
            className="flex items-center justify-center gap-2 w-full px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
          >
            <Phone size={18} /> Call
          </a>
        )}
      </div>
    </div>
  );
}
