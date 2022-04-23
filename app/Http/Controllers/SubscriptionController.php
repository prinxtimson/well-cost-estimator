<?php

namespace App\Http\Controllers;

use App\Models\Subscription;
use Illuminate\Http\Request;

class SubscriptionController extends Controller
{
    //

    public function index()
    {
        $user = auth()->user();

        $subscriptions = Subscription::whereBelongsTo($user)->paginate(25);

        return $subscriptions;
    }

    public function show($id)
    {
        return Subscription::find($id)->load(['user']);
    }

    public function verify($trxref)
    {
        $user = auth()->user();

        $payment = $user->verify($trxref);

        if($payment['status'] === 'success'){
            $response = [
                'msg' => 'Payment successful'
            ];

            return $response;
        }

        $response = response('Payment not successful', 400);

        return $response;
    }

    public function pay (Request $request)
    {
        $fields = $request->validate([
            'plan_name' => 'required|string',
            'plan_id' => 'required|string'
        ]);

        $user = auth()->user();
        $plan_name = $fields['plan_name'];
        $plan_id = $fields['plan_id'];

        return $user->newSubscription($plan_name, $plan_id)->charge();

    }


}