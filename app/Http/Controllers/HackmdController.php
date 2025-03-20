<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class HackmdController extends Controller
{
    public function getNotes()
    {

        $apiToken = env('HACKMD_API_TOKEN');
        if (!$apiToken) {
            return response()->json(['error' => 'API Token 未設置'], 500);
        }
        $response = Http::withHeaders([
            'Authorization' => "Bearer {$apiToken}",
        ])->get('https://api.hackmd.io/v1/notes');


        if ($response->failed()) {
            return response()->json(['error' => '無法獲取筆記', 'status' => $response->status()], 500);
        }

        $allNotes = $response->json();
        return array_filter($allNotes, function ($note) {
            $tags = $note['tags'] ?? []; // 確保 tags 是陣列
            $readPermission = $note['readPermission'] ?? []; // 確保 tags 是陣列
// 同時滿足兩個條件
            return in_array('全端', $tags) && $readPermission === 'guest';
        });

    }
}
