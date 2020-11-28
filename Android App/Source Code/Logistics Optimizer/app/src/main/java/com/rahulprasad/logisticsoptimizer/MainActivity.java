package com.rahulprasad.logisticsoptimizer;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.view.Window;
import android.view.WindowManager;
import android.view.animation.Animation;
import android.view.animation.AnimationUtils;
import android.widget.ImageView;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {
    View first,second,third,fourth,fifth,sixth;
    ImageView logo;
    TextView tag;
    Animation top,btm,middle;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        
        super.onCreate(savedInstanceState);
        requestWindowFeature(Window.FEATURE_NO_TITLE);
        this.getWindow().setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN, WindowManager.LayoutParams.FLAG_FULLSCREEN);
        setContentView(R.layout.activity_main);

        top = AnimationUtils.loadAnimation(this,R.anim.top);
        btm = AnimationUtils.loadAnimation(this,R.anim.bottom);
        middle = AnimationUtils.loadAnimation(this,R.anim.middle);

        first = findViewById(R.id.first);
        second = findViewById(R.id.second);
        third = findViewById(R.id.third);
        fourth = findViewById(R.id.fourth);
        fifth = findViewById(R.id.fifth);
        sixth = findViewById(R.id.sixth);

        logo = findViewById(R.id.logo);

        tag = findViewById(R.id.title);

        first.setAnimation(top);
        second.setAnimation(top);
        third.setAnimation(top);
        fourth.setAnimation(top);
        fifth.setAnimation(top);
        sixth.setAnimation(top);

        logo.setAnimation(middle);

        tag.setAnimation(btm);





    }
}