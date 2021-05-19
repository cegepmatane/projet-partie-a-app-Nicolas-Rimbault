@extends('template')

@section('contenu')

                {!! Form::open(['url' => 'contact']) !!}
                    <div class="form-group {!! $errors->has('nom') ? 'has-error' : '' !!}">
                        {!! Form::text('nom', null, ['class' => 'form-control', 'placeholder' => 'Votre nom']) !!}
                        {!! $errors->first('nom', '<small class="help-block">:message</small>') !!}
                    </div>
		<div class="form-group {!! $errors->has('prenom') ? 'has-error' : '' !!}">
                        {!! Form::text('prenom', null, ['class' => 'form-control', 'placeholder' => 'Votre prenom']) !!}
                        {!! $errors->first('prenom', '<small class="help-block">:message</small>') !!}
                    </div>
                    <div class="form-group {!! $errors->has('email') ? 'has-error' : '' !!}">
                        {!! Form::email('email', null, ['class' => 'form-control', 'placeholder' => 'Votre email']) !!}
                        {!! $errors->first('email', '<small class="help-block">:message</small>') !!}
                    </div>
                    <div class="form-group {!! $errors->has('telephone') ? 'has-error' : '' !!}">
                        {!! Form::text('telephone', null, ['class' => 'form-control', 'placeholder' => 'Votre telephone']) !!}
                        {!! $errors->first('telephone', '<small class="help-block">:message</small>') !!}
                    </div>
		<div class="form-group {!! $errors->has('adresse') ? 'has-error' : '' !!}">
                        {!! Form::text('adresse', null, ['class' => 'form-control', 'placeholder' => 'Votre adresse']) !!}
                        {!! $errors->first('adresse', '<small class="help-block">:message</small>') !!}
                    </div>
                    {!! Form::submit('Envoyer !', ['class' => 'btn btn-info pull-right']) !!}
                {!! Form::close() !!}
		<div class="col-md-5 address-container">
                      <ul class="list-unstyled">
                        <li>
                          <span class="fa-icon">
                            <i class="fa fa-phone" aria-hidden="true"></i>
                          </span>
                          + 33 9 07 45 12 65
                        </li>
                        <li>
                          <span class="fa-icon">
                            <i class="fa fa-at" aria-hidden="true"></i>
                          </span>
                          e-mail@mail.io
                        </li>
                        <li>
                          <span class="fa-icon">
                            <i class="fa fa fa-map-marker" aria-hidden="true"></i>
                          </span>
                          42 rue Moulbert 75016 Paris
                        </li>
                      </ul>
                      <h3>Suivez moi sur mes reseaux</h3>
                      <a href="https://www.reddit.com/user/MrZeltus" title="" class="fa-icon">
                        <i class="fa fa-reddit"></i>
                      </a>
                      <a href="https://twitter.com/ZeltusAsda" title="" class="fa-icon">
                        <i class="fa fa-twitter"></i>
                      </a>
                    </div>
@stop


